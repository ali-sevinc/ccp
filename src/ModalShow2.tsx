export default function ModalShow2({
  onCloseModal,
}: {
  onCloseModal?: () => void;
}) {
  return (
    <div>
      <h1>This is modal</h1>
      <h2>window-2</h2>
      <p>Modal Body</p>
      <button onClick={onCloseModal}>Close</button>
    </div>
  );
}
