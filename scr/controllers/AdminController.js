export default class AdminController {
    static async home(req, res) {
        const name = "Pedro";
        const surname = "henrique";

        res.render("admin/index", { name, surname });
    }

    static async signIn(req, res) {
        res.status(200).json({ message: "Logado com sucesso !", status: 1 });
    }

    static async signUp(req, res) {
        const { name, email, password, role } = req.body;
        res.status(200).json({
            message: "Cadastrado com Sucesso !",
            status: 1,
        });
    }
}
