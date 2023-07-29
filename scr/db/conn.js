import mongoose from "mongoose";

class Conn {
    constructor(query) {
        this.query = query;
    }

    start() {
        mongoose
            .connect(this.query, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log("Conectado com sucesso");
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
}

export default Conn;
