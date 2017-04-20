// @flow
interface IBaseController {
	post(req: Object, res: Object, next: Function): any,
}

type Model = {
	create(data: any): Promise<any>,
	get(data: any): Promise<any>
}

type Dependencies = {
	Model: Object // make specific
};

module.exports = class BaseController implements IBaseController {
	Model: Model;

	constructor({ Model }: Dependencies) {
		this.Model = Model;
	}

	post = async (req: Object, res: Object, next: Function) => {
		try {
			const newModel = await this.Model.create(req.body)
			res.send(newModel);
		} catch (e) {
			next(e);
		}
	}

	get = async (req: Object, res: Object, next: Function) => {
		try {
			res.send('hi');
		} catch (e) {
			next(e);
		}
	}
}
