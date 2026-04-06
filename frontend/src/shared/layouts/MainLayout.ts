export function MainLayout(content: string) {
  return `
    <div>
      <header>MedicOS</header>
      <main>${content}</main>
    </div>
  `;
}
