import Tesseract from 'tesseract.js';
import { assertEquals } from "@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";

describe('tesseract', () => {
  it('works', async () => {
    const result = await Tesseract.recognize(
      'https://tesseract.projectnaptha.com/img/eng_bw.png',
      'eng',
    )
  
    assertEquals(result.data.text, expectedText)
  })
})

const expectedText = `Mild Splendour of the various-vested Night!
Mother of wildly-working visions! hail
I watch thy gliding, while with watery light
Thy weak eye glimmers through a fleecy veil;
And when thou lovest thy pale orb to shroud
Behind the gather’d blackness lost on high;
And when thou dartest from the wind-rent cloud
Thy placid lightning o’er the awaken’d sky.`
