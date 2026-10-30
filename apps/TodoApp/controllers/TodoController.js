import TodoModel from "../models/TodoModel.js";

class TodoController {
    async index(req, res) {
        const title = "All Todos";
        const todos = await TodoModel.findAll(
            { 
                order: [["createdAt", "DESC"]] 
            }
        );
        console.log(todos);
        res.render("TodoApp/index", { title: title, todos: todos });
    }

    async show(req, res) {
        const id = req.params.id;
        const todo = await TodoModel.findByPk(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        res.render("TodoApp/show", { title: todo.title, todo: todo });
    }

    create(req, res) {
        console.log("Rendering create todo page");
        res.render("TodoApp/create", { title: "Create Todo" });
    }

    async store(req, res) {
        const { title, text } = req.body;
        if (!title || !text) {
            return res.redirect("/todos/create");
        }
        const todo = await TodoModel.create({ title, text });
        res.redirect("/todos");
    }


    async delete(req, res) {
        const id = req.params.id;
        const todo = await TodoModel.findByPk(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        res.render("TodoApp/delete", { title: "Delete Todo", todo: todo });
    }

    async destroy(req, res) {
        const id = req.body.id;
        const todo = await TodoModel.findByPk(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        await todo.destroy();
        res.redirect("/todos");
    }

    async edit(req, res) {
        const id = req.params.id;
        const todo = await TodoModel.findByPk(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        res.render("TodoApp/edit", { title: `Edit ${todo.title}`, todo: todo });
    }
    
    async update(req, res) {
        const id = req.params.id;
        const { title, text } = req.body;
        const todo = await TodoModel.findByPk(id);
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        if (!title || !text) {
            return res.redirect(`/todos/${id}/edit`);
        }
        await todo.update({ title, text });
        res.redirect("/todos");
    }
}

export default new TodoController();