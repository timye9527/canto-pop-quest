/**
 * 粤语朗读的共用逻辑。
 *
 * 原则同题库模式一致：只用真正的粤语 voice，
 * 宁可唔出声，都唔会 fallback 落普通话 voice 读粤语字。
 */

export function isCantoneseVoice(voice: SpeechSynthesisVoice) {
  const lang = voice.lang.toLowerCase();
  const name = voice.name.toLowerCase();
  return (
    lang.includes('zh-hk') ||
    lang.includes('zh_hk') ||
    lang.includes('yue') ||
    name.includes('cantonese') ||
    name.includes('hong kong') ||
    name.includes('yue')
  );
}

export function getPreferredCantoneseVoice(voices: SpeechSynthesisVoice[]) {
  const cantoneseVoices = voices.filter((voice) => isCantoneseVoice(voice));
  return (
    cantoneseVoices.find((voice) => voice.name.toLowerCase().includes('sinji')) ||
    cantoneseVoices.find((voice) => /female|woman|mei|sin|sandy|flo|shelley/i.test(voice.name)) ||
    cantoneseVoices[0]
  );
}

export function getVoiceLabel(voice: SpeechSynthesisVoice) {
  return `${voice.name} ${voice.lang}`.trim();
}

/** 条漫模式用的朗读：读得出就读，读唔到静静返回 false。 */
export function speakCanto(text: string): boolean {
  if (!text || typeof window === 'undefined' || !window.speechSynthesis) return false;
  const voice = getPreferredCantoneseVoice(window.speechSynthesis.getVoices());
  if (!voice) return false;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
  return true;
}
