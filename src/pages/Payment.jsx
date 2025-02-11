import React from 'react'
import "./payment.scss"
import payment from "../assets/svg/payment.svg"
import pay from "../assets/image/payment.png"
import pay1 from "../assets/image/payment1.png"
import pay11 from "../assets/image/payment11.png"
import dolar from "../assets/svg/dolar.svg"
import creditcard from "../assets/svg/credit-card.svg"
import creditcard1 from "../assets/svg/credit-card2.svg"
import credit from "../assets/svg/credit.svg"
import sms from "../assets/svg/sms.svg"
import { Link } from 'react-router-dom'






function Payment() {
  return (
    <div className='payment container'>
     
        <div className='payment-top'>
        <Link to="/">
          <h6>Главная  /  Оплата  </h6>
          </Link>
          <div className='oplata'>
          <h2>Оплата</h2>
          <img  src={payment} alt="" />
          </div>

          <img className='png' src={pay} alt="" />
          <img className='png' src={pay1} alt="" />
          <img className='png' src={pay11} alt="" />
        </div> 
        <div className='payment-bottom'>
          <div className='pay1'>
            <div className='dolar'>
              <img src={dolar} alt="" />
              <h4>Картой или наличными</h4>
            </div>
            <h6>При доставке курьером по городу Бишкек</h6>
            <p>
Оплатите заказ наличными или банковской картой  с помощью мобильного терминала у курьера в момент получения заказа.
</p>
            <p>Изменение суммы оплаты при доставке (предъявление дисконтной карты при доставке, но не заявленной в заказе, изменение стоимости товара в рамках специальных предложений, вступивших в действие после подтверждения заказа и пр.), к сожалению, невозможно.</p>
            <h6>При самовывозе из магазинов</h6>
            <p>Оплатите заказ наличными или банковской картой при получении в магазинах.</p>
            <p>Доставка в остальные города РФ осуществляется на условиях полной предоплаты</p>
          </div>
          <div className='pay1'>
            <div className='dolar'>
              <img src={creditcard} alt="" />
              <h4>Картой на сайте</h4>
            </div>
            <h6>При любых  способах получения заказа. </h6>
            <p>Оплатите заказ и доставку в личном кабинете после подтверждения заказа сотрудником контакт-центра.</p>
            <p>Возможна предоплата заказа посредством банковской карты (Visa, Visa Electron, Mastercard, Maestro).</p>
          
            <p>Обращаем ваше внимание, что по картам Maestro и Visa Electron банком-эмитентом должны быть разрешены покупки онлайн.</p>
            <p>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платежный шлюз ПАО СБЕРБАНК. Соединение с платежным шлюзом и передача информации осуществляется в защищенном режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa или MasterCard SecureCode для проведения платежа также может потребоваться ввод специального пароля. Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введенная информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платежных систем МИР, Visa Int. и MasterCard Europe Sprl.</p>
                  <p>При условии заказа товара, поставка которого осуществляется «под заказ» сроком от одной недели до трех месяцев, с клиентом заключается договор поставки, и вносится предоплата 100% от стоимости товара.</p>
                  <h5>Оплата банковскими картами осуществляется после проверки заказа менеджером интернет-магазина и после подтверждения заказа! </h5>
          </div>
          <div className='pay1'>
            <div className='dolar'>
              <img src={creditcard1} alt="" />
              <h4>Безналичным платежом</h4>
            </div>
            <h6>При любых  способах получения заказа. </h6>
            <p> Услуга доступна физическим и юридическим лицам..</p>
            <p>Счет на оплату придет на электронную почту после подтверждения заказа сотрудником контакт-центра.</p>
          
            <p>Оплатите заказ банковским переводом (в любом банке, а так же в отделении Почты России) - в этом случае оплачивается комиссия в соответствии с тарифом банка с помощью интернет-банкинга.</p>
            <p>   Предоплата банковским переводом или электронным кошельком осуществляется только после телефонного подтверждения заказа менеджером Интернет-магазина и резервирования товара на складе. Заказанный товар должен быть оплачен в течение двух банковских дней. В случае нарушения срока оплаты Продавец вправе по своему выбору: отказаться от поставки товара и вернуть Покупателю полученные денежные средства или увеличить срок доставки на период равный просрочке оплаты. Отгрузка заказа осуществляется по факту поступления денежных средств на наш расчетный счет. </p>
              <p>При условии заказа товара, поставка которого осуществляется «под заказ» сроком от одной недели до трех месяцев, с клиентом заключается договор поставки, и вносится предоплата 100% от стоимости товара.</p>
                
          </div>
          <div className='pay1'>
            <div className='dolar'>
              <img src={credit} alt="" />
              <h4>Кредит</h4>
            </div>
            <h6>При любых  способах получения заказа. </h6>
            <p>Покупайте товары сейчас, а оплачивайте потом в удобное для вас время. </p>
            <p>Благодаря банкам-партнерам нашего магазина у вас есть возможность приобрести интересующие вас товары в кредит. При себе необходимо иметь паспорт..</p>
          
          </div>
        </div>
        <div className='info4'>
        <img src={sms} alt="" />
        <button>Отправьте нам сообщение</button>
      </div>
    </div>
  )
}

export default Payment
