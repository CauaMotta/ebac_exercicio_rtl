import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
});

describe("Teste de inserção de 2 novos comentarios", () => {
  test("Deve adicionar 2 novos comentarios", () => {
    render(<PostComment />);

    // Adiciona o primeiro comentario
    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "comentario 1",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));

    // Adiciona o segundo comentario
    fireEvent.change(screen.getByTestId("textarea-comentario"), {
      target: {
        value: "comentario 2",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));

    // Testa se os comentarios foram adicionados
    expect(screen.getAllByTestId("comentario")).toHaveLength(2);
  });
});
