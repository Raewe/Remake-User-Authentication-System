export default class AdminController {
    static async home(req, res) {
        const name = "Pedro";
        const surname = "henrique";

        res.render("admin/index", { name, surname });
    }

    static async getName(req, res) {
        res.send(req.body.name);
    }
}
