import { HttpService } from '@nestjs/axios';
import { HttpException, Logger } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';

export const parseContactName = (name: string) => {
  const [first, ...last] = name.split(' ');
  return { first, last: last.join(' ') };
};

export const handleHttpGet = (httpService: HttpService, url: string, logger: Logger) => {
  return firstValueFrom(
    httpService.get(url).pipe(
      map((response) => response.data),
      catchError((err) => {
        logger.error(`${url} - failed`);
        throw new HttpException(err.data, err.status);
      }),
    ),
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleHttpPatch = (httpService: HttpService, url: string, data: any, logger: Logger) => {
  return firstValueFrom(
    httpService.patch(url, data).pipe(
      map((response) => response.data),
      catchError((err) => {
        logger.error(`${url} - failed`);
        throw new HttpException(err.data, err.status);
      }),
    ),
  );
};
