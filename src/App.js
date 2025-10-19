import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요.\n"
    );
    const result = this.calculate(input);
    Console.print(`결과 : ${result}`);
  }

  calculate(input) {
    if (input || input.trim() === "") {
      return 0;
    }
    const delimiter = /[,:]/;
    const numberString = input;
    const numbers = numberString.split(delimiter);

    return 0;
  }
}

export default App;
