import dotenv from 'dotenv';
dotenv.config({path: '.env.development.local'})
import { experimental_generateImage as generateImage } from 'ai';
import { openai } from '@ai-sdk/openai';
import { put } from '@vercel/blob';

const imagePrompts = [
  'Luxurious hotel suite with a freestanding bathtub overlooking a scenic mountain range',
  'Elegant beachfront cabana with personalized butler service and champagne setup',
  'Michelin-star restaurant interior with exquisite table setting and mood lighting',
  'Opulent hotel facade with grand entrance and valet service at night',
  'Serene yoga session on a private beach at sunrise with luxury resort in background'
];

async function generateAndSaveImage(prompt) {
  try {
    const { image } = await generateImage({
      model: openai.image('dall-e-3'),
      prompt,
      size: '1024x1024',
      providerOptions: {
        openai: { style: 'vivid', quality: 'hd' }
      }
    });
    const intArray = image.uint8Array;
    console.log('array ', image.uint8Array);
    const buffer = Buffer.from(intArray);
    const name = prompt.split(' ')[0];
    const filename = `lhw/${name}.png`;
    const { url } = await put(filename, buffer, { access: 'public' });

    return url;
  } catch (error) {
    console.error(`Error generating/saving image for prompt: ${prompt}, `, error);
  }
}

async function main() {
  for (const prompt of imagePrompts) {
    const response = await generateAndSaveImage(prompt);
    console.log('response ', response);
  }
}

main().catch(console.error);