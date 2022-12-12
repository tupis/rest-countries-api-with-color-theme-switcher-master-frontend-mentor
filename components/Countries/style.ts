import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  max-width: ${(props) => props.theme.width.maxWidth};
  flex-wrap: wrap;
  gap: 30px 20px;
`;
