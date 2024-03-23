import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default CategoriesPage;
