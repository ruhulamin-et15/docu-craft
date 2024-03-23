import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default AuthorPage;
