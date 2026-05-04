const FormErrorLabel = ({ children }) => {
  return (
    <p className="text-sm font-medium text-destructive block text-left">
      {children}
    </p>
  );
};
export default FormErrorLabel;
