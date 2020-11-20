import { render } from "@testing-library/react";

test("teste first", () => {
    const { getByText } = render(
        <div>
            <h1 className="myStyle">
                Text
            </h1>
            <h2 style={{color: "blue", position: "fixed", top: "0px"}}>
                Text 2
            </h2>
        </div>
    );

    const header = getByText("Text");
    const header2 = getByText("Text 2");

    expect(header).toHaveClass("myStyle");
    expect(header2).toHaveStyle("color: blue");
});
