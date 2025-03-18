export default function TabButton({ children, nameButton }) {
  return (
    <>
      <div className="d-grid gap-2">
        <button
          type="button"
          className={nameButton}
        >
          {children}
        </button>
      </div>
    </>
  );
}
