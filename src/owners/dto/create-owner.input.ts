import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOwnerInput {
  @Field(() => String, { description: 'owner name' })
  name: string;
}
