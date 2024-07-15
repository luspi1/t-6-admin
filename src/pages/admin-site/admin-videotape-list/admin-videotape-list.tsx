import { type FC } from 'react'
import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { VideosTable } from 'src/pages/admin-site/admin-videotape-list/components/videos-table/videos-table'

import { AdminRoute } from 'src/routes/admin-routes/consts'

import { MainButton } from 'src/UI/MainButton/MainButton'
import { PlusIconSvg } from 'src/UI/icons/plusIconSVG'

import styles from './index.module.scss'

export const AdminVideotapeList: FC = () => {
	return (
		<>
			<Helmet>
				<title>Видеолента</title>
			</Helmet>
			<h1>Видеолента</h1>
			<AdminContent className={styles.videotapeListContent} $height='1100px'>
				<MainButton className={styles.topVideoBtn} to={`/${AdminRoute.AdminAddVideo}`} as='route'>
					<PlusIconSvg />
					Добавить видео
				</MainButton>
				<VideosTable />
				<MainButton to={`/${AdminRoute.AdminAddVideo}`} as='route'>
					<PlusIconSvg />
					Добавить видео
				</MainButton>
			</AdminContent>
		</>
	)
}
