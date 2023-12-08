import bcryptjs from "bcryptjs";
import adminUsers from "../db/schemas/adminUsers.js";

export default class AdminController {
    static async getHome(req, res) {
        res.render("admin/index", {});
    }

    static async handleSignInPost(req, res) {
        res.status(200).json({ message: "Logado com sucesso !", status: 1 });
    }

    static async getSignUpPage(req, res) {
        res.render("admin/signUpPage");
    }

    static async handleSignUpPost(req, res) {
        // TODO: Ajeitar o cadastro
        // TODO: Passar o input
        const { name, email, password, confirmPassword, role } = req.body;
        const salt = bcryptjs.genSaltSync(10);
        try {
            if (!name) {
                return res.status(400).json({
                    message: "Por favor, preencha o nome!",
                    status: 2,
                });
            }

            if (!email) {
                return res.status(400).json({
                    message: "Por favor, preencha o email!",
                    status: 2,
                });
            }
            if (!password) {
                return res.status(400).json({
                    message: "Por favor, preencha a senha!",
                    status: 2,
                });
            }
            if (password !== confirmPassword) {
                return res
                    .status(400)
                    .json({ message: "As senhas não coincidem!", status: 2 });
            }
            if (!role) {
                return res.status(400).json({
                    message: "Por favor, preencha a função!",
                    status: 2,
                });
            }

            // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;  // Validar complexidade da senha (por exemplo, pelo menos 8 caracteres com letras e números)
            // if (!passwordRegex.test(password)) {
            //     return res.status(400).json({
            //         message:
            //             "A senha deve conter pelo menos 8 caracteres, incluindo letras e números!",
            //         status: 2,
            //     });
            // }

            const hash = bcryptjs.hashSync(password, salt);

            // adminUsers.create({ name: `${name} ${surname}`, email, password: hash, role });

            return res
                .status(200)
                .json({ message: "Cadastrado com sucesso!", status: 1 });
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error);
            return res.status(500).json({
                message: "Ocorreu um erro ao cadastrar o usuário.",
                status: 0,
            });
        }
    }
}
