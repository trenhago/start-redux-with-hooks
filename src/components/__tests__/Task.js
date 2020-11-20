import { cleanup, fireEvent, render } from "@testing-library/react";
import Task from "../Task";

afterEach(cleanup);

describe("Elementos visuais da Task", () => {

    test("deveria mostrar o título da Task", () => {

        const { getByText } = render(
            <Task
                task={{
                    id: 0,
                    title: "Estudar Redux",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        getByText("Estudar Redux");

    });

    test("deveria mostrar a descrição da Task", () => {

        const { getByText } = render(
            <Task
                task={{
                    id: 0,
                    title: "",
                    description: "Um contêiner de estado previsível para aplicativos JS",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        getByText("Um contêiner de estado previsível para aplicativos JS");

    });

    test("deveria ter uma linha horizontal separando título de descrição", () => {

        const { container } = render(
            <Task
                task={{
                    id: 0,
                    title: "Estudar Redux",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        expect(container).toContainHTML('hr');

    });

    test("deveria mostrar o status da Task", () => {

        const { getByDisplayValue } = render(
            <Task
                task={{
                    id: 0,
                    title: "",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        getByDisplayValue("Unstarted");

    });

    test("deveria mostrar na caixa de selação três opções", () => {

        const { container } = render(
            <Task
                task={{
                    id: 0,
                    title: "",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        const selectNode = container.getElementsByTagName('select')[0];

        expect(selectNode).toHaveLength(3);

    });

    test("deveria mostrar na caixa de selação as opções Unstarted, In Progress e Completed", () => {

        const { getByText } = render(
            <Task
                task={{
                    id: 0,
                    title: "",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={() => { }}
            />
        );

        getByText("Unstarted");
        getByText("In Progress");
        getByText("Unstarted");

    });

});

describe("Funcionamento da caixa de seleção de status", () => {

    test("deveria retornar um array com o id e o status da Task", () => {

        const fn = jest.fn();

        const { getByRole, getByDisplayValue } = render(
            <Task
                task={{
                    id: 0,
                    title: "",
                    description: "",
                    status: "Unstarted"
                }}
                onStatusChange={fn}
            />
        );

        getByDisplayValue("Unstarted");

        const selectNode = getByRole("combobox");

        fireEvent.change(selectNode, { target: { value: "In Progress" } });
        fireEvent.change(selectNode, { target: { value: "Completed" } });
        fireEvent.change(selectNode, { target: { value: "Unstarted" } });

        expect(fn.mock.calls).toEqual([
            [0, "In Progress"],
            [0, "Completed"],
            [0, "Unstarted"]
        ]);
    });
});
