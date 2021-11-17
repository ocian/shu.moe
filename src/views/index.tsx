import { Flex, Well } from '@adobe/react-spectrum'
import { useTranslation } from 'react-i18next'
import styles from '../styles/page.module.scss'
import * as C from '../components'

export function Home() {
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <Flex direction="row" justifyContent="space-between" margin="size-100">
        <span />
        <C.I18n />
      </Flex>
      <Well margin="size-1000">{t`waht-happened`}</Well>
    </div>
  )
}
