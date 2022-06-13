type SaveProps = {
  filename: string;
  data: string;
};

export const save = ({ filename, data }: SaveProps) => {
  const blob = new Blob([data], {
    type: "text/csv",
  });

  const linkElement = window.document.createElement("a");

  linkElement.href = window.URL.createObjectURL(blob);
  linkElement.download = filename;

  document.body.appendChild(linkElement);

  linkElement.click();

  document.body.removeChild(linkElement);
};
