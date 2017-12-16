/**
 * @var {array}
 * List of available faker providers and configurations
 */
const PROVIDERS = [
    {
        label: 'Address | Zip code',
        key: 'address.zipCode',
    },
    {
        label: 'Address | City',
        key: 'address.city',
    },
    {
        label: 'Address | City Prefix',
        key: 'address.cityPrefix',
    },
    {
        label: 'Address | City Suffix',
        key: 'address.citySuffix',
    },
    {
        label: 'Address | Street Name',
        key: 'address.streetName',
    },
    {
        label: 'Address | Street Address',
        key: 'address.streetAddress',
    },
    {
        label: 'Address |  County',
        key: 'address.county',
    },
    {
        label: 'Address | Secondary Address',
        key: 'address.secondaryAddress',
    },
    {
        label: 'Address | Country',
        key: 'address.country',
    },
    {
        label: 'Address | Country Code',
        key: 'address.countryCode',
    },
    {
        label: 'Address | State',
        key: 'address.state',
    },
    {
        label: 'Address | State Abbr',
        key: 'address.stateAbbr',
    },
    {
        label: 'Address | Latitude',
        key: 'address.latitude',
    },
    {
        label: 'Address | Longitude',
        key: 'address.longitude',
    },
    {
        label: 'Company | Company name',
        key: 'company.companyName',
    },
    {
        label: 'Name | First Name',
        key: 'name.firstName',
    },
    {
        label: 'Name | Last Name',
        key: 'name.lastName',
    },
    {
        label: 'Name | Full Name',
        key: 'name.findName',
    },
    {
        label: 'Lorem | Word',
        key: 'lorem.word',
    },
    {
        label: 'Lorem | Words',
        key: 'lorem.words',
    },
    {
        label: 'Lorem | Sentence',
        key: 'lorem.sentence',
    },
    {
        label: 'Lorem | Sentences',
        key: 'lorem.sentences',
    },
    {
        label: 'Lorem | Slug',
        key: 'lorem.slug',
    },
    {
        label: 'Lorem | Paragraph',
        key: 'lorem.paragraph',
    },
    {
        label: 'Lorem | Paragraphs',
        key: 'lorem.paragraphs',
    },
    {
        label: 'Lorem | Text',
        key: 'lorem.text',
    },
    {
        label: 'Lorem | Lines',
        key: 'lorem.lines',
    },
    {
        label: 'Internet | Avatar',
        key: 'internet.avatar',
    },
    {
        label: 'Internet | Email',
        key: 'internet.email',
    },
    {
        label: 'Internet | Example Email',
        key: 'internet.exampleEmail',
    },
    {
        label: 'Internet | Username',
        key: 'internet.userName',
    },
    {
        label: 'Internet | Url',
        key: 'internet.url',
    },
    {
        label: 'Internet | Domain Name',
        key: 'internet.domainName',
    },
    {
        label: 'Internet | IP',
        key: 'internet.ip',
    },
    {
        label: 'Internet | Ipv6',
        key: 'internet.ipv6',
    },
    {
        label: 'Internet | User agent',
        key: 'internet.userAgent',
    },
    {
        label: 'Internet | Color',
        key: 'internet.color',
    },
    {
        label: 'Internet | Data uri',
        key: 'image.dataUri',
    },
    {
        label: 'Internet | Mac Address',
        key: 'internet.mac',
    },
    {
        label: 'Image',
        key: 'image.image',
    },
    {
        label: 'Image | Avatar',
        key: 'image.avatar',
    },
    {
        label: 'Image | Image url',
        key: 'image.imageUrl',
    },
    {
        label: 'Finance | IBAN',
        key: 'finance.iban',
    },
    {
        label: 'Finance | Account',
        key: 'finance.account',
    },
]

module.exports = PROVIDERS;