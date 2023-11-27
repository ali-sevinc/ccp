export default function ModalShow({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  return (
    <div>
      <h1>This is modal</h1>
      <h2>window-1</h2>
      <p>Modal Body</p>
      <button onClick={onCloseModal}>Close</button>
    </div>
  );
}
