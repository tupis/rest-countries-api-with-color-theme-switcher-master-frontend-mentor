import { Container, Button } from "./style";
import { useRouter } from "next/router";

interface Props {}

const BackButton = ({}: Props): JSX.Element => {
  const router = useRouter();

  return (
    <Container>
      <Button onClick={(): void => router.back()}>Back</Button>
    </Container>
  );
};

export default BackButton;
