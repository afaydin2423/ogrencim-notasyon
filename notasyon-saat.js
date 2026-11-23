(() => {
  const options = {timeZone:'Europe/Istanbul', day:'2-digit', month:'2-digit', year:'numeric'};
  const dateTime = new Intl.DateTimeFormat('tr-TR', {
    ...options, hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23'
  });
  const pgnDate = new Intl.DateTimeFormat('en-CA', options);
  window.notasyonTurkiyeSaati = value => {
    if (typeof value !== 'string' || !value.trim()) return '';
    const iso = value.trim().replace(' ', 'T');
    const utc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?$/.test(iso) ? iso + 'Z' : iso;
    const date = new Date(utc);
    return Number.isFinite(date.getTime()) ? dateTime.format(date) : '';
  };
  window.notasyonPgnTarihi = date => {
    const parts = Object.fromEntries(pgnDate.formatToParts(date).map(({type,value}) => [type,value]));
    return [parts.year,parts.month,parts.day].join('.');
  };
})();
