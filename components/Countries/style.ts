import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: ${(props) => props.theme.width.maxWidth};
  flex-wrap: wrap;
  gap: 50px 15px;
  padding: 20px 0;
`;
