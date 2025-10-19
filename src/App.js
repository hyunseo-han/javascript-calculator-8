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
    if (!input || input.trim() === "") {
      return 0;
    }

    let delimiter = /[,:]/;
    let numberString = input;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\\n");

      if (delimiterEndIndex === -1) {
        throw new Error("[ERROR] 잘못된 커스텀 구분자 형식입니다.");
      }

      const customDelimiter = input.substring(2, delimiterEndIndex);
      numberString = input.substring(delimiterEndIndex + 2);

      const escapedDelimiter = customDelimiter.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );
      delimiter = new RegExp(`[,:]|${escapedDelimiter}`);
    }

    const numbers = numberString
      .split(delimiter)
      .map((str) => str.trim())
      .filter((str) => str !== "");

    let sum = 0;
    for (const numStr of numbers) {
      const num = Number(numStr);

      if (Number.isNaN(num)) {
        throw new Error("[ERROR] 숫자가 아닌 값이 포함되어 있습니다.");
      }

      if (num < 0) {
        throw new Error("[ERROR] 음수는 입력할 수 없습니다.");
      }

      sum += num;
    }

    return sum;
  }
}

export default App;
