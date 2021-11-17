import {
  ActionButton,
  Flex,
  Item,
  Menu,
  MenuTrigger,
  Picker,
  Well,
} from '@adobe/react-spectrum'
import { useTranslation } from 'react-i18next'
import styles from '../styles/home.module.scss'

import i18n from '../i18n'

export function Home() {
  const { t } = useTranslation()

  const locales = [{ name: 'en' }, { name: 'zh-CN' }]

  function changeI18n(locale) {
    i18n.changeLanguage(locale)
  }

  return (
    <div className={styles.page}>
      <Flex direction="row" justifyContent="space-between" margin="size-100">
        <span></span>
        <MenuTrigger>
          <ActionButton>{t`locale-placeholder`}</ActionButton>
          <Menu items={locales} onAction={changeI18n}>
            {(item) => <Item key={item.name}>{item.name}</Item>}
          </Menu>
        </MenuTrigger>
      </Flex>
      <Well margin="size-1000">
        怎么办
      </Well>
    </div>
  )
}
