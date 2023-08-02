---
title: Nest.js (ConfigModule)
categories: [Today I Learned, Typescript]
tags: [NestJS, TypeORM] # TAG names should always be lowercase
---

> dotenv 사용 시 ConfigModule을 app.module.ts에 선언하여 전역으로 사용할 수 있도록 처리한다.
{: .prompt-info }

```ts
import { ConfigModule } from '@nestjs/config';

imports : [ConfigModule.forRoot()]
```