---
title: Nest.js DTO (class Validator)
categories: [Today I Learned, Typescript]
tags: [NestJS] # TAG names should always be lowercase
---

> npm install class-validator class-transformer 
{: .prompt-tip }

> 타입 지정과 동시에 데이터 형변환 및 형식에 대한 검증이 가능하다.
{: .prompt-info }


```ts
import { IsNotEmpty, IsNumber, IsString, Matches, MATCHES, MaxLength, MinLength } from 'class-validator';
import { CreateClientDto } from './createClient.dto';

export class CreateAccountDto extends CreateClientDto {
  @IsNotEmpty()
  @IsNumber()
  typeId: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(4)
  @MinLength(4)
  @Matches(/^[0-9]+$/)
  password: string;
}

```
