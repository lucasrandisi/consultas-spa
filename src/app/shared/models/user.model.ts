import { environment } from "src/environments/environment";

export class User {
	static readonly modelUrl: string = "users"

	id: number | null = null;
	name: string | null = null;
	email: string | null = null;
	password: string | null = null;
	rol_id: number | null = null;


	constructor(props: Partial<User>) {
		Object.assign(this, props)
	}

	static getModelRoute(id?: number) {
		if (id) {
			return `${environment.apiUrl}/${this.modelUrl}/${id}`;
		}

		return `${environment.apiUrl}/${this.modelUrl}`;
	}
}