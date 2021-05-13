import { Button } from './button.interace';

export interface Modal {
    size: string,
    title: string,
    titleType: string,
    description?: string,
    input?: string,
    buttons?: Button[]
}
