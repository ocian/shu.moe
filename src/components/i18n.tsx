import { MenuTrigger, ActionButton, Menu, Item } from '@adobe/react-spectrum'
import { useTranslation } from 'react-i18next'

import i18n, { locales } from '../i18n'

export function I18n() {
  const { t } = useTranslation()

  function changeI18n(locale) {
    i18n.changeLanguage(locale)
  }

  return (
    <MenuTrigger>
      <ActionButton>{t`locale-placeholder`}</ActionButton>
      <Menu items={locales} onAction={changeI18n}>
        {(item) => <Item key={item.name}>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
  )
}
