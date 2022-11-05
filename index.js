export async function getAdvice() {
  //get advices from https://api.adviceslip.com/advice
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advices = await response.json();
    return advices;
  } catch (error) {
    console.log(error);
  }
}
