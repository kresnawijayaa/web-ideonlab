import clsx from 'clsx'
import Link from 'next/link'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Email" invert={invert}>
          <Link
            href={`mailto:hello@ideonlab.tech`}
            className="text-neutral-400 hover:text-neutral-200"
          >
            hello@ideonlab.tech
          </Link>
        </Office>
      </li>
      <li>
        <Office name="WhatsApp" invert={invert}>
          <Link
            href={`https://wa.me/6285156515167`}
            className="text-neutral-400 hover:text-neutral-200"
          >
            +62 851-5651-5167
          </Link>
        </Office>
      </li>
    </ul>
  )
}
