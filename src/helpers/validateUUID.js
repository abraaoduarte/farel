import { version as uuidVersion , validate as uuidValidate } from 'uuid';

export default function validateUUID(string) {
    return uuidValidate(string) && uuidVersion(string) === 4;
}