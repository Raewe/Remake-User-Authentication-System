export default class AdminController {
    static async home(req, res) {
        res.send("Olá mundo");
    }

    static async getName(req, res) {
        res.send(req.body.name);
    }
}
