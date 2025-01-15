document.getElementById("downloadBtn").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  // Verificar se os campos obrigatórios estão preenchidos
  if (!nome || !email) {
    alert("Por favor, preencha os campos obrigatórios.");
    return;
  }

  // Inicializar o jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Configurar o estilo do título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(0, 102, 204); // Azul
  doc.text("Formulário Preenchido", 10, 20);

  // Adicionar uma linha horizontal abaixo do título
  doc.setDrawColor(0, 102, 204); // Azul
  doc.setLineWidth(0.5);
  doc.line(10, 25, 200, 25);

  // Configurar o estilo do texto
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0); // Preto

  // Adicionar conteúdo estilizado
  doc.text("Informações do Formulário:", 10, 35);
  doc.setFont("helvetica", "bold");
  doc.text("Nome:", 10, 45);
  doc.setFont("helvetica", "normal");
  doc.text(nome, 50, 45);

  doc.setFont("helvetica", "bold");
  doc.text("Email:", 10, 55);
  doc.setFont("helvetica", "normal");
  doc.text(email, 50, 55);

  doc.setFont("helvetica", "bold");
  doc.text("Mensagem:", 10, 65);
  doc.setFont("helvetica", "normal");
  doc.text(mensagem, 10, 75, { maxWidth: 180, align: "justify" });

  // Adicionar um rodapé (opcional)
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150); // Cinza
  doc.text("Gerado em: " + new Date().toLocaleString(), 10, 280);

  // Baixar o PDF
  doc.save("formulario-estilizado.pdf");
});
