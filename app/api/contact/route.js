import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email, mensagem } = body;

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ message: "Preencha todos os campos obrigatorios." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Informe um email valido." }, { status: 400 });
    }

    return NextResponse.json(
      {
        message: "Mensagem recebida com sucesso.",
        data: {
          nome,
          email,
          mensagem,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ message: "Nao foi possivel processar o envio." }, { status: 500 });
  }
}
