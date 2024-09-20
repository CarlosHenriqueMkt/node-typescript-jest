import { Response, Request } from "express";
import { database } from "../../database.ts";

export class UsersController {
	criarUsuario(request: Request, response: Response) {
		const { name } = request.body;

		if (name.length < 1) {
			return response
				.status(403)
				.json({
					mensagem: "Não é possível criar usuários sem um nome",
				});
		}

		database.push(name);
		return response
			.status(201)
			.json({ "mensagem": `User ${name} criado com sucesso!` });
	}

	listarUsuario(request: Request, response: Response) {
		return response.status(200).json(database);
	}
}
