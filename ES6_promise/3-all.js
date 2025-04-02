import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then(() => createUser())
    .then((res) => console.log(`${res.firstName} ${res.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
