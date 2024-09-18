import { tasksData as tasks } from "../data";

export async function GET(request, {params}) {
    const task = tasks.find(task => task.id === params.id);

    if (task) {
        return new Response(JSON.stringify(task), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function PUT(request, { params }) {
    const { title } = await request.json();
    const taskIndex = tasks.findIndex(task => task.id === params.id);

    if (taskIndex !== -1) {
        tasks[taskIndex].title = title;
        return new Response(JSON.stringify(tasks[taskIndex]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(request, { params }) {
    const taskIndex = tasks.findIndex((task) => task.id === params.id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return new Response(null, {
            status: 204,
        });
    }
    return new Response(JSON.stringify({ message: 'Task not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
}