import { Any } from 'wacom';

export interface User {
	token?: string;
	_id?: string;
	name: string;
	email: string;
	thumb: string;
	data: Record<string, unknown>;
	is: Record<string, boolean>;
}
