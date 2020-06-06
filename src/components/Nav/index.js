import React from "react"

import { FiFileText } from "react-icons/fi"
import { FaFolderOpen, FaUserAlt } from "react-icons/fa"
import { Link } from "gatsby"
import * as S from "./styles"
import { useTranslation } from "react-i18next"

export default () => {
  const { t } = useTranslation()

  return (
    <S.Nav>
      <ul>
        <S.Li>
          <Link to="/">
            <FiFileText />
            {t("curriculum")}
          </Link>
        </S.Li>
        {/* <S.Li>
          <Link to="/">
            <FaFolderOpen />
            Portifolio
          </Link>
        </S.Li> */}
        <S.About>
          <Link to="/cv">
            <FaUserAlt />
            Sobre
          </Link>
        </S.About>
      </ul>
    </S.Nav>
  )
}
