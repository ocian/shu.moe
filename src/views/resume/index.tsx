import styles from './index.module.scss'
import message from './data'
import VolunteerActivismIcon from '@material-ui/icons/VolunteerActivism'
import FlakyIcon from '@material-ui/icons/Flaky'
import FaceRetouchingNaturalIcon from '@material-ui/icons/FaceRetouchingNatural'

export default function PageResume() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles['top-row']}>
          <span className={styles['person-name']}>{message?.person?.name}</span>
          <span className={styles['person-position']}>
            {message?.person?.subtitle}
          </span>
        </div>

        <div className={styles.left_col}>
          <div className={styles.person_image}></div>
          {/* 1 联系方式 */}
          <div className={styles.content}>
            <h3>联系方式</h3>
            <p>
              <a href={'mailto:' + message?.concat?.email}>
                {message?.concat?.email}
              </a>
              <br />
              <a href={'tel:' + message?.concat?.tel}>
                {message?.concat?.tel}
              </a>{' '}
              <br />
              {message?.concat?.base} <br />
            </p>
          </div>
          {/* 2 左侧信息栏 */}
          {message.leftContent.map((content) => (
            <div key={content.title}>
              <h3>{content.title}</h3>
              {content.list.map((item) => (
                <p key={item.join(',')}>
                  {item.map((msg) => (
                    <span key={msg}>
                      <span>{msg}</span>
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className={styles.right_col}>
          {/* 3 亮点 */}
          <div className={styles.box}>
            <h3>亮点</h3>
            <div>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <FaceRetouchingNaturalIcon />
                </div>
                <p>
                  关于沟通，我能够找出并且明确阻碍进度的问题和目标，列出现有的问题，介绍我了解到的解决办法，这能够稳定有序的推动事情的进展，为事情的完成提供保障。
                </p>
              </div>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <FlakyIcon />
                </div>
                <p>
                  关于工作，我在前端的工作过程中，对产品需求，UI
                  设计，后端逻辑，测试覆盖工作都有累积。缺少其中的某个角色，我自己部分的工作仍然可以做好；在有这些累积的前提下，我可以让合作变得更加的轻松。
                </p>
              </div>
              <div className={styles.row}>
                <div className={styles.icon}>
                  <VolunteerActivismIcon />
                </div>
                <p>
                  我善于从需求的角度考虑项目，为经手的代码整理流程和影响范围，在需要的时候写下图文描述。这项技能对于全面了解既有产品和为其维护更新是非常有用的。
                </p>
              </div>
            </div>
          </div>
          {/* 4 项目经历 */}
          <div className={styles.box}>
            <h3>项目经历</h3>
            {message.projects.map((project) => (
              <div key={project.title}>
                <div className={styles.title}>
                  <h4>{project.title}</h4>
                  <p>{project.subtitle}</p>
                </div>
                <p className={styles.tag_list}>
                  {project.tags.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
                {project.list.map(p => <p key={p}>{p}</p>)}
              </div>
            ))}
          </div>
          {/* 5 其他想写的内容 */}
          {message.rightBox.map((item) => (
            <div className={styles.box} key={item.title}>
              <h3>{item.title}</h3>
              {item.list.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
