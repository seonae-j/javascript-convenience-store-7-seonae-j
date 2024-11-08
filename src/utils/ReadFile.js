import { MissionUtils } from '@woowacourse/mission-utils';
import * as fs from 'fs';
import * as resolve from 'path';

const readFileObject = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        MissionUtils.Console.print('파일을 읽는 중 오류가 발생했습니다.', err);
        reject(err);
        return;
      }

      const lines = data.trim().split(`\n`);
      const headers = lines[0].split(',');
      const result = lines.slice(1).map((line) => {
        const values = line.split(',');
        const valueObject = {};

        headers.forEach((header, index) => {
          valueObject[header.trim()] = values[index].trim();
        });

        return valueObject;
      });

      resolve(result);
    });
  });
};

export default readFileObject;
