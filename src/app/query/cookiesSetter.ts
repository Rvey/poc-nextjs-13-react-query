'use server';
import { cookies } from 'next/headers';
 
export default async function create(data) {
  // @ts-ignore
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  });
}

